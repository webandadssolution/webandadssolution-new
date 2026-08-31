<?php
/**
 * Fully dynamic sitemap — rebuilt from the CMS on every request, so a newly
 * published blog post or author shows up immediately without waiting for the
 * next static export/deploy. `.htaccess` rewrites /sitemap.xml here.
 */

header('Content-Type: application/xml; charset=utf-8');

const SITE_URL = 'https://webandadssolution.com';
const CMS_URL = 'https://cms.webandadssolution.com';

function fetchJson(string $url): ?array
{
    $context = stream_context_create(['http' => ['timeout' => 8, 'ignore_errors' => true]]);
    $raw = @file_get_contents($url, false, $context);
    if ($raw === false) {
        return null;
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : null;
}

function fetchAllPosts(): array
{
    $posts = [];
    $page = 1;
    $totalPages = 1;
    do {
        $json = fetchJson(CMS_URL . "/api/posts.php?page={$page}&limit=100");
        if (!$json || empty($json['data'])) {
            break;
        }
        foreach ($json['data'] as $post) {
            if (!empty($post['category'])) {
                $posts[] = $post;
            }
        }
        $totalPages = $json['pagination']['total_pages'] ?? 1;
        $page++;
    } while ($page <= $totalPages);
    return $posts;
}

function fetchAuthors(): array
{
    $json = fetchJson(CMS_URL . '/api/authors.php');
    return $json['data'] ?? [];
}

$staticRoutes = [
    '', '/services', '/services/seo', '/services/content-marketing', '/services/ppc',
    '/services/smo', '/services/web-development', '/services/virtual-assistant',
    '/about', '/contact', '/blog',
];

$now = gmdate('c');
$urls = [];

foreach ($staticRoutes as $path) {
    $urls[] = ['loc' => SITE_URL . $path, 'lastmod' => $now];
}

foreach (fetchAllPosts() as $post) {
    $categorySlug = $post['category']['slug'] ?? null;
    if (!$categorySlug || empty($post['slug'])) {
        continue;
    }
    $lastmod = $post['updated_at'] ?? $post['published_at'] ?? $now;
    $urls[] = [
        'loc' => SITE_URL . '/' . $categorySlug . '/' . $post['slug'],
        'lastmod' => date('c', strtotime($lastmod)),
    ];
}

foreach (fetchAuthors() as $author) {
    if (empty($author['slug'])) {
        continue;
    }
    $urls[] = ['loc' => SITE_URL . '/authors/' . $author['slug'], 'lastmod' => $now];
}

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach ($urls as $url) {
    echo "<url>\n";
    echo '<loc>' . htmlspecialchars($url['loc'], ENT_QUOTES | ENT_XML1, 'UTF-8') . "</loc>\n";
    echo '<lastmod>' . htmlspecialchars($url['lastmod'], ENT_QUOTES | ENT_XML1, 'UTF-8') . "</lastmod>\n";
    echo "</url>\n";
}
echo '</urlset>';

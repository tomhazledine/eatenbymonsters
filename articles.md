---
layout: page
title: Articles
shortTitle: Articles
permalink: /articles/
---

<ul>
    {% for post in site.categories['comment'] %}
        <li>
            <h2>
                <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
        </li>
    {% endfor %}
</ul>
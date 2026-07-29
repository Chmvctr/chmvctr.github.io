---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
sitemap: false
---

{% include base_path %}

A list of the main pages and content found on this website. An automatically generated [XML sitemap]({{ base_path }}/sitemap.xml) is also available for search engines.

<h2>Pages</h2>

{% assign sorted_pages = site.pages | sort: "title" %}

{% for post in sorted_pages %}
  {% if post.title and post.sitemap != false %}
    {% unless post.url == "/404.html" or post.url == "/sitemap/" %}
      {% include archive-single.html %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% if site.posts.size > 0 %}
<h2>Posts</h2>

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
  {% unless collection.output == false or collection.label == "posts" %}
    {% if collection.docs.size > 0 %}
      <h2>{{ collection.label | capitalize }}</h2>

      {% for post in collection.docs reversed %}
        {% include archive-single.html %}
      {% endfor %}
    {% endif %}
  {% endunless %}
{% endfor %}

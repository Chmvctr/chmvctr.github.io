---
title: "Blog"
permalink: /blog/
layout: archive
author_profile: true
---

{% assign entries = site.blog | sort: "date" | reverse %}
{% for post in entries %}
  {% include archive-single.html %}
{% endfor %}

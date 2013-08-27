---
layout: default
title: Categories &amp; Tags
---

{% for category in site.categories %}
## {{ category | first }}
{% for post in category.last %} [{{ post.title }}]({{ post.url }}) / {% endfor %}
{% endfor %}

# Tags

{% for tag in site.tags %}
## {{ tag | first }}
{% for post in tag.last %}[{{ post.title }}]({{ post.url }}) / {% endfor %}
{% endfor %}
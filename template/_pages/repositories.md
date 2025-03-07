---
layout: page
permalink: /repositories/
title: Repositories
description: The open-source community is amazing!
nav: false
nav_order: 4
---

## GitHub users
These are some of the users I wish to acknowledge.

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

{% endif %}


## GitHub Repositories
Below I've highlighted some repositories that I've found useful throughout the course of my work.

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

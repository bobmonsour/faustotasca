---
layout: plain.html
permalink: /montecito.html
title: Fausto Bellino Tasca | Montecito
description: Fausto Tasca designed numerous room interiors for clients in Montecito.
---
{% from "macros.njk" import imageGallery %}

## Montecito, California

Montecito’s wealthy residents were among Fausto’s early patrons. One of these, a Mrs. Norton, was instrumental in obtaining Fausto’s commission for the Mission painting.

On a very memorable evening, Fausto presented the Mission painting to the King and Queen of Belgium. The royal couple were dinner guests at the home of Mrs. Norton in Montecito. As the newspaper article indicates, Fausto had also decorated the interior of the dining room where he respectfully presented his painting.

<p class="blkquote">“To her august majesty, the Queen of the Belgians. I make this gift with reverence, this is my work through the aid of my benefactress, Mrs. Norton. With profound respect. Fausto Tasca.”</p>

<div class="main-slider-container">
  <div id="image-slider" class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        {%- for item in galleries[page.fileSlug] -%}
          {{ imageGallery(item, page.fileSlug) }}
        {%- endfor -%}
      </ul>
    </div>
  </div>
</div>

As Italian-themed styles were very popular with the wealthy, Fausto was called upon to design and execute room decorates for several Montecito estates.

<div class="image-pair">
  <div>
    <img src="../images/montecito/dining-room.jpg" alt="Design for Italianate dining room watercolor on paper, 1919 or 1920, Archive of the Tasca Estate">
    <p>Design for Italianate dining room watercolor on paper, 1919 or 1920, Archive of the Tasca Estate</p>
  </div>
  <div>
    <img src="../images/montecito/villa-interior-santa-barbara.jpg" alt="Design for frieze Watercolor on paper, 1919 or 1920, Archive of the Tasca Estate">
    <p>Design for frieze Watercolor on paper, 1919 or 1920, Archive of the Tasca Estate</p>
  </div>
</div>

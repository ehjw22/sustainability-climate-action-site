# Sustainability and Climate Action Website

My second front-end web development project, built in Year 1 of my Diploma in IT at Singapore Polytechnic (Front-End Development, CA2). It builds on [my first project](https://github.com/ehjw22/zero-waste-lifestyle-site) and turns a static site into a responsive, interactive one using Bootstrap 5 and vanilla JavaScript.

> This is an early project, kept here to show my progress. See my [pinned repositories](https://github.com/ehjw22) for more recent work.

## Pages

| Page | What it covers |
|------|----------------|
| **Home** (`html/index.html`) | Hero carousel, climate change facts, and pop-up fun-fact toasts with a "Don't show this again" option |
| **Learn More** (`html/information.html`) | The five zero-waste principles, energy-saving tips for Singapore homes, a filterable gallery of food-waste technology companies, and a quiz |
| **Pledge** (`html/form.html`) | A sustainability pledge form where users can add their own actions |

## Features

- **Responsive layout** built with the Bootstrap 5 grid, carousels, accordions, an offcanvas menu, modals and toasts
- **Filterable tech gallery** that renders company cards from a JavaScript data array, filters them by category (for example Farms and Shops) and adjusts the layout to the screen size
- **Quiz** that picks random questions, checks each answer, shows an explanation and gives a final score
- **Pledge form** with client-side validation that shows error messages in a modal, lets users add and remove pledge actions, and counts the words in the pledge as you type
- **Image modal** for viewing images at a larger size

## Built with

- HTML5 and CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- Vanilla JavaScript (DOM manipulation and event handling)

## Running it

Open `index.html` in any browser. It redirects to the home page in the `html/` folder. Bootstrap loads from a CDN, so you need an internet connection.

## What I learned

- Building responsive pages with a CSS framework
- Generating page content from JavaScript data instead of hard-coding it
- Validating form input on the client side and giving clear feedback
- Making a site more interactive with event-driven JavaScript

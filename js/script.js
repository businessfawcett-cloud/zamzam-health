;(function () {
  'use strict'

  /* -------------------------------------------------------
     Content Injection
     Populate elements with data-content attributes from CONTENT
     ------------------------------------------------------- */
  function injectContent() {
    if (typeof CONTENT === 'undefined') return

    document.querySelectorAll('[data-content]').forEach(function (el) {
      var path = el.getAttribute('data-content').split('.')
      var value = CONTENT
      for (var i = 0; i < path.length; i++) {
        if (value && typeof value === 'object' && path[i] in value) {
          value = value[path[i]]
        } else {
          return
        }
      }
      if (typeof value === 'string') {
        el.textContent = value
      }
    })
  }

  /* -------------------------------------------------------
     Navigation
     ------------------------------------------------------- */
  function setupNav() {
    var toggle = document.querySelector('[data-nav-toggle]')
    var nav = document.querySelector('[data-nav]')

    if (!toggle || !nav) return

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true' ? false : true
      toggle.setAttribute('aria-expanded', expanded)
      nav.classList.toggle('is-open')
    })

    // Close nav when clicking a nav link (mobile)
    var links = nav.querySelectorAll('a')
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false')
        nav.classList.remove('is-open')
      })
    }

    // Mark current page
    var currentPath = window.location.pathname.split('/').pop() || 'index.html'
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute('href')
      if (href === currentPath) {
        links[j].setAttribute('aria-current', 'page')
        break
      }
    }
  }

  /* -------------------------------------------------------
     FAQ Accordion (Insurance page)
     ------------------------------------------------------- */
  function setupFaq() {
    var questions = document.querySelectorAll('[data-faq-question]')
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true' ? false : true
        this.setAttribute('aria-expanded', expanded)
        var answer = document.getElementById(this.getAttribute('aria-controls'))
        if (answer) {
          answer.classList.toggle('is-open')
        }
      })
    }
  }

  /* -------------------------------------------------------
     Initialize
     ------------------------------------------------------- */
  function init() {
    injectContent()
    setupNav()
    setupFaq()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()

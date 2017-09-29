"use strict";

$(document).ready(function () {
  var data = [{
    id: 0,
    title: "Project Coaching",
    description: "Triathlon Coaching Resource, training, nutrition, fitness, health.",
    demoUrl: "https://projectcoaching.uk/",
    previewUrl: "http://kyran88.github.io/portfolio/icons/project%20coaching%20web.PNG",
    category: "frontend"
  }, {
    id: 1,
    title: "Perth Triathlon Club",
    description: "Website for perth triathlon club.",
    demoUrl: "https://www.perthtriclub.com/",
    previewUrl: "http://kyran88.github.io/portfolio/icons/perth%20tri%20club%20website.PNG",
    category: "frontend"
  }, {
    id: 2,
    title: "Perth Masters Swimming CLub",
    description: "Website for perth masters swimming club.",
    demoUrl: "http://perthmasters.co.uk/",
    previewUrl: "http://kyran88.github.io/portfolio/icons/perth%20masters%20website.PNG",
    category: "frontend"
  }, {
    id: 3,
    title: "Triathlon Trivia Skill",
    description: "An Alexa quiz game which will test your knowledge on triathlon",
    demoUrl: "https://www.amazon.co.uk/ProjectCoaching-Triathlon-Trivia/dp/B01MRXZHKJ/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1506712544&sr=1-1&keywords=triathlon+trivia",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Triathlon%20Trivia%20Alexa%20Skill.PNG",
    category: "backend"
  }, {
    id: 4,
    title: "Cook Book",
    description: "A recipie finder skill which allows you to say ingredients which will bring back a recipie.",
    demoUrl: "https://www.amazon.co.uk/ProjectCoaching-Cook-Book/dp/B073NPHJM4/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1506712711&sr=1-1&keywords=cook+book",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Cook%20Book%20Alexa%20Skill.PNG",
    category: "backend"
  }, {
    id: 5,
    title: "Swim Coach",
    description: "This skill will give you a random swim set to try, it will be a mixture of speed and endurance.",
    demoUrl: "https://www.amazon.co.uk/ProjectCoaching-Swim-Coach/dp/B074J9TQLS/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1506712814&sr=1-1&keywords=swim+coach",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Swim%20Coach%20Alexa%20Skill.PNG",
    category: "backend"
  }, {
    id: 6,
    title: "Fitness Facts",
    description: "A list of fitness facts when asked will give you a random fact.",
    demoUrl: "https://www.amazon.co.uk/ProjectCoaching-Fitness-Facts/dp/B073SH77XF/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1506712872&sr=1-1&keywords=fitness+facts",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Fitness%20Facts%20Alexa%20Skill.PNG",
    category: "backend"
  }, {
    id: 7,
    title: "Quick Quiz",
    description: "A general knowledge quiz which has around 80 questions, even the best find it tough.",
    demoUrl: "https://www.amazon.co.uk/ProjectCoaching-Quick-Quiz/dp/B074KSL2S3/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1506713005&sr=1-1&keywords=quick+quiz",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Quick%20Quiz%20Alexa%20Skill.PNG",
    category: "backend"
  }, {
    id: 8,
    title: "Swimming Trivia",
    description: "A swimming quiz which will test your knowledge on a broad range of swimming topics.",
    demoUrl: "https://www.amazon.co.uk/ProjectCoaching-Swimming-Trivia/dp/B06XD2JPVK/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1506713102&sr=1-2&keywords=swimming+trivia",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Swimming%20Trivia%20Alexa%20Skill.PNG",
    category: "backend"
  }, {
    id: 9,
    title: "Calculator",
    description: "A javascript calculator which you dont want to divide by 0",
    demoUrl: "http://kyran88.github.io/calculator/calculator.html",
    previewUrl: "http://kyran88.github.io/portfolio/icons/calculator.PNG",
    category: "react"
  }, {
    id: 10,
    title: "Cycling Nutrition Calculator",
    description: "A nutrition calculator to work out your average intake based on power and bodyweight.",
    demoUrl: "http://kyran88.github.io/Nutrition/index.html",
    previewUrl: "http://kyran88.github.io/portfolio/icons/cycling%20calculator.PNG",
    category: "react"
  }, {
    id: 11,
    title: "Merry Christmas",
    description: "Animated christmas wishes, spread some joy with this page.",
    demoUrl: "http://kyran88.github.io/xmas/xmas.html",
    previewUrl: "http://kyran88.github.io/portfolio/icons/christmas.PNG",
    category: "react"
  }, {
    id: 12,
    title: "Chatbot",
    description: "A chatbot powered by API.ai with debug json results",
    demoUrl: "http://kyran88.github.io/bot/bot.html",
    previewUrl: "Kyran88.github.io/portfolio/icons/api ai chatbot.PNG",
    category: "meteor"
  }, {
    id: 13,
    title: "Chatbot 2",
    description: "A chatbot built with motion ai.",
    demoUrl: "hhttp://kyran88.github.io/bot/bot2.html",
    previewUrl: "http://kyran88.github.io/portfolio/icons/Chatbot.PNG",
    category: "meteor"
  }];

  var frontend = data.filter(function (item) {
    return item.category === 'frontend';
  });

  var backend = data.filter(function (item) {
    return item.category === 'backend';
  });

  var react = data.filter(function (item) {
    return item.category === 'react';
  });

  var meteor = data.filter(function (item) {
    return item.category === 'meteor';
  });

  function removeActiveClass() {
    $('.center').find('a').each(function (i, el) {
      if ($(el).hasClass('active')) {
        $(el).removeClass('active');
      }
    });
  }
  function removeOpenClass() {
    $('.container').each(function (i, el) {
      if ($(el).hasClass('open')) {
        $(el).removeClass('open');
      }
    });
  }
  $('.js-close').on('click', function (e) {
    e.preventDefault();
    removeActiveClass();
    $('.center').animate({
      opacity: '0'
    }, 100);
    removeOpenClass();
    $('.close-arrow').hide();
  });
  $('.js-open-about').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-about').addClass('active');
  });

  $('.js-open-works').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });

  $('.js-open-contact').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-contact').addClass('active');
  });

  $('.js-get-email').on('click', function (e) {
    e.preventDefault();
    swal({
      title: 'Enter your E-mail Address to recieve Resume',
      input: 'email'
    }).then(function (email) {
      if (email) {
        swal({
          type: 'success',
          html: 'Entered email: ' + email
        });
      }
    });
  });

  function generateCard(data) {
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return '<li class="card animated zoomIn"><div class="card-media"><img src=' + imgUrl + ' alt="#" /></div><div class="card-content"><h4>' + title + '</h4><p>' + desc + '</p></div><div class="card-actions"><a target="_blank" href=' + demoUrl + ' class="view-demo">View Demo</a></div></li>';
  }
  function renderToDom(data) {
    data.forEach(function (item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }

  //for intial rendering
  renderToDom(frontend);

  function clearDom() {
    $('.js-list').empty();
  }
  $('input[type=radio]').on('change', function (e) {
    switch (e.target.value) {
      case 'frontend':
        clearDom();
        renderToDom(frontend);
        break;
      case 'backend':
        clearDom();
        renderToDom(backend);
        break;
      case 'react':
        clearDom();
        renderToDom(react);
        break;
      case 'meteor':
        clearDom();
        renderToDom(meteor);
        break;
    }
  });
});

if (document.createElement("p").style.flex === undefined) {
  alert("no flexbox support");
}

$.backstretch([
        "http://kyran88.github.io/portfolio/icons/Equipment.jpg",       "http://kyran88.github.io/portfolio/icons/workstation.jpg"
    ],{
        duration:20000,
        fade: 'slow'
    });

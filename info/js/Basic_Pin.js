$(function(){var e=new ScrollMagic.Controller,n=new ScrollMagic.Scene({triggerElement:"#pinned-trigger1",duration:$(window).height()-100,triggerHook:0,reverse:!0}).setPin("#pinned-element1").addIndicators(),r=new ScrollMagic.Scene({triggerElement:"#pinned-trigger2",duration:400}).setPin("#pinned-element2").addIndicators();e.addScene([n,r])});
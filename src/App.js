import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import {Draggable, Droppable} from '@shopify/draggable';
import {TweenLite, TweenMax, Bounce, Power2, TimelineMax} from 'gsap';
import Tone from 'tone';

import Cube from './cube/cube';

import './App.css';

class App extends Component {

  componentDidMount(){

    const droppable = new Droppable(document.querySelectorAll('ul'), {
      draggable: 'li',
      droppable: 'li',
    });

    droppable.on('droppable:over', () => console.log('sortable:start'))
    droppable.on('droppable:out', () => console.log('sortable:sorted'));

    var li1 = document.getElementById("li__1");
    var li2 = document.getElementById("li__2");
    var li3 = document.getElementById("li__3");
    var li4 = document.getElementById("li__4");
    var li5 = document.getElementById("li__5");

    li1.onmouseover = function(){
      var duration = 1;
      TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
      TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});

      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("C4", "15n");
    }

    li2.onmouseover = function(){
      var duration = 1;
      TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
      TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});

      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("D4", "15n");
    }

    li3.onmouseover = function(){
      var duration = 1;
      TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
      TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});

      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("E4", "15n");
    }

    li4.onmouseover = function(){
      var duration = 1;
      TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
      TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});

      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("F4", "15n");
    }

    li5.onmouseover = function(){
      var duration = 1;
      TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
      TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});

      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("G4", "15n");
    }

    var bounce_obj = document.getElementById("bounce");
    var duration = 1;
    var tl = new TimelineMax({repeat:-1, repeatDelay:1});

    tl.set(bounce_obj, {y: 0})
    .to(bounce_obj, duration / 4, {y:+20, ease:Power2.easeOut}, "bounce")
    .to(bounce_obj, duration / 2, { y:0, ease:Bounce.easeOut, delay:duration / 4 }, "bounceme");

  }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true
    };

    return (
      <div>
        <SectionsContainer {...options}>
          <Section className="section__one">
            <ul id="ul__">
              <li id="li__1">1</li>
              <li id="li__2">2</li>
              <li id="li__3">3</li>
              <li id="li__4">4</li>
              <li id="li__5">5</li>
            </ul>
            <h1>Drag two numbers...</h1>
            <div>
              <div className="drop__li__1__1"></div>
              <div className="plus__1"> + </div>
              <div className="drop__li__2__1"></div>
              <div className="result__1">= 6</div>
            </div>
            <div class="arrow" id="bounce"/>
            <div className="confeti"></div>
          </Section>
          <Section className="section__two">
              <div className="drop__li__1__2"></div>
              <div className="plus__2"> + </div>
              <div className="drop__li__2__2"></div>
              <div className="result__2">= 6</div>
          </Section>
          <Section className="section__three">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;

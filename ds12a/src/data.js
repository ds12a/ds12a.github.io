const navLinks = [
    {name : "About", link : "#about"},
    {name : "Skills", link : "#skills"},
    {name : "Projects", link : "#projects"},
    {name : "Achievements", link : "#achievements"},
    {name : "Blog", link : "https://ds12a.github.io/blog/"}
];

const skillLangs = [
  {name : "Python", description : "My first programming language. Used to learn the fundementals of programming and gradually moved into computer vision and deep learning.", pct : "70%"},
  {name : "C++", description : "My second programming language. Used for competitive programming.", pct : "75%"},
  {name : "Java", description : "My third programming language. Used for robotics (go 2767!).", pct : "70%"},
  {name : "HTML/CSS", description : "My experience is not great in CSS. I have not worked very much with web development.", pct : "30%"},
  {name : "JavaScript", description : "See what I said about HTML/CSS.", pct : "35%"},
  {name : "Octave", description : "Learned a bit of Octave for Introduction to Machine Learning by Andrew Ng on Coursera.", pct : "20%"},
  {name : "Rust", description : "I am in the progress of learning this language for its memory safety and performance.", pct : "15%"}
];

const skillLibs = [
  {name : "Pytorch", description : "My experience with Pytorch is mostly composed of toying around with deep learning, especially with computer vision and NLP.", pct : "30%"},
  {name : "React.js", description : "Used React.js to greatly simplify the structure of this website.", pct : "50%"},
  {name : "Tailwind CSS", description : "Used for this website.", pct : "40%"},
  {name : "Bootstrap", description : "Older versions of this website relied on Bootstrap, but I found this to be very uncustomizable and made my website appear like almost any other Bootstrap-based site.", pct : "70%"},
  {name : "Numpy", description : "Used some Numpy along with Pytorch and Pandas for deep learning.", pct : "30%"},
  {name : "Pandas", description : "Used along with other libraries like Tensorflow and Pytorch.", pct : "25%"},
  {name : "Matplotlib", description : "Data visualization!!!", pct : "15%"}
];

const projects = [
  {name : "My Website", description : "There's not much of a description to write here.", link : "#"},
  {name : "Quadratic Solver", description : "A quick remedy for my boredom and a quick way to brush up on my JS.", link : "https://github.com/ds12a/Quadratic-Solver"},
];

const achievements = [
  {name : "USACO Silver", description : "Achieved USACO Silver in the January 2021 contest with a full score on the Bronze contest, earning an in-contest promotion."},
  {name : "AIME (2x)", description : "Qualifed for the 2022 and the 2023 AIME and made Achievement Roll on the AMC 12."},
  {name : "SVSU Programming Competition - Second Place", description : "Placed 2nd at the SVSU programming competition."},

  {name : "WMU Integration Bee - Second Place", description : "Placed 2nd at the 2023 WMU Integration Bee."},
  {name : "Mid-Michigan Math Olympiad - 2nd place", description : "Took 2nd at the Mid-Michigan Math Olympiad."},
];

const particlesConfig = {
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#000000"
    },
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#ffffff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "fullScreen": {
    "enable": false,
    "zIndex": 1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": "push"
      },
      "onDiv": {
        "selectors": ["#name", "#des", "#buttonAbout"],
        "enable": true,
        "mode": "bounce",
        "type": "rectangle"
      },
      "onHover": {
        "enable": true,
        "mode": "bounce",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      }
    }
  },
  "manualParticles": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  },
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
    "collisions": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "enable": false,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        },
        "s": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        },
        "l": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "sync": true
        }
      }
    },
    "destroy": {
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 3
        },
        "rate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true
      }
    },
    "gradient": [],
    "groups": {},
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800,
        "factor": 1000
      },
      "limit": 0,
      "value": 80
    },
    "opacity": {
      "random": {
        "enable": true,
        "minimumValue": 0.1
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 1,
        "sync": false,
        "destroy": "none",
        "startValue": "random",
        "minimumValue": 0.2
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "reduceDuplicates": false,
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "rotate": {
      "random": {
        "enable": true,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": true,
        "speed": 5,
        "sync": false
      },
      "direction": "random",
      "path": false
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": [
          {
            "src": "https://logodownload.org/wp-content/uploads/2019/10/python-logo-4.png",
            "width": 32,
            "height": 32
          },
          {
            "src": "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
            "width": 32,
            "height": 32
          },
          {
            "src": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/234px-Java_programming_language_logo.svg.png",
            "width": 32,
            "height": 32
          },
          {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            "width": 32,
            "height": 32
          },
          {
            "src": "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo.png",
            "width": 32,
            "height": 32
          },
          {
            "src": "https://logodownload.org/wp-content/uploads/2016/10/html5-logo.png",
            "width": 32,
            "height": 32
          },
          {
            "src": "https://pytorch.org/assets/images/pytorch-logo.png",
            "width": 32,
            "height": 32
          },
          
        ],

      },
      "type": "image"
    },
    "size": {
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 16,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 40,
        "sync": false,
        "destroy": "none",
        "startValue": "random",
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "width": 0,
      "color": {
        "value": "#000000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      }
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": 50
    },
    "zIndex": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": -1,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "style": {},
  "themes": [],
  "zLayers": 1
};
export {
    navLinks,
    particlesConfig,
    skillLangs,
    skillLibs,
    projects,
    achievements
};

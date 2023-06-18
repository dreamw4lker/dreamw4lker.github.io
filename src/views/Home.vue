<template>
  <div class="fill-height text-center"
       style="background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :options="setupScript"
    />
    <div class="d-flex flex-column position-relative fill-height align-center justify-center" style="z-index: 2">
      <v-avatar image="../assets/img/photo_h.png" size="120" class="x-avatar"/>
      <p style="color: #FFF; font-size: 48px; font-weight: 600; line-height: 1.1; font-family: 'IBM Plex Sans', sans-serif" class="mt-8">Alexander Shkirkov</p>
      <p style="color: #FFF; font-size: 48px; font-weight: 200; line-height: 1.1; font-family: 'IBM Plex Sans', sans-serif" class="mt-8">Fullstack developer</p>
      <div class="d-flex pt-10">
        <template v-for="link in links">
          <v-btn
            variant="outlined"
            color="white"
            class="ml-2"
            :href="link.href"
          >
            {{ link.title }}
          </v-btn>
        </template>
      </div>
      <div class="d-flex pt-10">
        <template v-for="sb in social">
          <v-tooltip
            location="bottom"
            content-class="bg-white"
            :text="sb.tooltip"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon
                variant="text"
                color="white"
                class="ml-2"
                :href="sb.href"
              >
                <v-icon>{{ sb.icon }}</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import {loadFull} from "tsparticles"

const particlesInit = async engine => {
  await loadFull(engine)
}

//Particles setup script
const setupScript = {
  "autoPlay": true,
  "background": {
    "color": {
      "value": "transparent"
    },
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
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
        "mode": "repulse"
      },
      "onDiv": {
        "enable": false,
        "mode": {},
        "type": "circle"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
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
        "distance": 250,
        "duration": 2,
        "mix": false,
        "opacity": 0,
        "size": 0,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
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
      "push": {
        "default": true,
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 400,
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
      }
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
      "absorb": {
        "speed": 2
      },
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
      "maxSpeed": 50,
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
          "delay": 0,
          "decay": 0,
          "sync": true
        },
        "s": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        },
        "l": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        }
      }
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
          "y": 600
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
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
      "random": true,
      "size": false,
      "speed": 1,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "limit": 0,
      "value": 160
    },
    "opacity": {
      "random": {
        "enable": true,
        "minimumValue": 0.1
      },
      "value": {
        "min": 0,
        "max": 1
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none",
        "minimumValue": 0
      }
    },
    "reduceDuplicates": false,
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
      "loadShape": {},
      "close": true,
      "fill": true,
      "options": {},
      "type": "circle"
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": {
        "min": 1,
        "max": 3
      },
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 4,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none",
        "minimumValue": 0.3
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
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
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "destroy": {
      "bounds": {},
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
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
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
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
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
          "value": "#000"
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
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "smooth": false,
  "style": {},
  "zLayers": 100,
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}

const links = [
  {title: 'Experience', href: '/experience'},
  {title: 'Projects', href: '/projects'},
  {title: 'CV'}
]

const social = [
  {icon: 'custom:vk', href: 'https://vk.com/a.shkirkov', tooltip: 'VK'},
  {icon: 'mdi-instagram', href: 'https://instagram.com/dreamwal.ker', tooltip: 'Instagram'},
  {icon: 'mdi-linkedin', href: 'https://linkedin.com/in/shkirkov', tooltip: 'LinkedIn'},
  {icon: 'mdi-stack-overflow', href: 'https://stackoverflow.com/users/9275224', tooltip: 'StackOverflow profile'},
  {icon: 'custom:leetcode', href: 'https://leetcode.com/dreamwalker7', tooltip: 'LeetCode profile'},
]
</script>

<style>
.x-avatar .v-img__img {
  transform: scale(2.5);
  margin-top: 60px;
}
</style>

<template>
  <img alt="Vue logo" src="../assets/logo.png" class="user-image" :style="filters" />
</template>

<script>
export default {
  data() {
    return {
      filterList: [
        'grayscale',
        'sepia',
        'saturate',
        'hueRotate',
        'invert',
        'brightness',
        'contrast',
        'blur'
      ],
      suffix: {
        hueRotate: 'deg',
        blur: 'px'
      }
    }
  },
  props: {
    grayscale: {
      type: Number,
      default: 0,
    },
    sepia: {
      type: Number,
      default: 0,
    },
    saturate: {
      type: Number,
      default: 1,
    },
    hueRotate: {
      type: Number,
      default: 0,
    },
    invert: {
      type: Number,
      default: 0,
    },
    brightness: {
      type: Number,
      default: 1,
    },
    contrast: {
      type: Number,
      default: 1,
    },
    blur: {
      type: Number,
      default: 0
    }
  },
  computed: {
    filters() {
      const toDash = (str) => str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()
      return { 
        filter: Object.entries(this._data.filterList)
                  .map(filterName => filterName[1])
                  .map(filterName => `${toDash(filterName)}(${this._props[filterName]}${this.suffix[filterName] || ''})`).join(' ')
      }
    }
  }
}
</script>

<style>
.user-image {
  height: 50px;
}
</style>

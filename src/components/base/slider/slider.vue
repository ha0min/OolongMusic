<template>
  <div class="slider" ref="rootRef">
    <div class="slider__group">
      <div class="slider__group__page"
           v-for="item in sliders"
           :key="item.id"
      >
        <a :href="item.link">
          <img :src="item.pic">
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in sliders"
        @click="onSliderClick(index)"
        :key="item.id"
        :class="{'active': currentPageIndex === index}">
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSlider from '@/components/base/slider/use-slider'

export default {
  name: 'slide',
  props: {
    sliders: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const rootRef = ref(null)
    const {
      slider,
      currentPageIndex
    } = useSlider(rootRef)

    const onSliderClick = (index) => {
      slider.value.goToPage(index, 0, 500)
    }

    return {
      rootRef,
      currentPageIndex,
      onSliderClick
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  min-height: 1px;
  font-size: 0;
  touch-action: pan-y;

  &__group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    &__page {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;

      a {
        display: block;
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots-wrapper {
    position: absolute;
    left: 50%;
    bottom: 12px;
    line-height: 12px;
    transform: translateX(-50%);

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>

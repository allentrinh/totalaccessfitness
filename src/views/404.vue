<template>
  <div id="four-oh-four">
    <section class="hero has-text-centered is-fullheight">
      <video autoplay="autoplay" loop="loop" muted="muted" class="video-bg" type="mp4">
        <source :src="video">
      </video>
      <div class="hero-body">
        <div class="container">
          <div class="heading-container">
            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="four-oh-four content">
                  <h1 class="title four-oh-four__title">404</h1>
                  <h2 class="subtitle four-oh-four__subtitle">It looks like you've out run the treadmill!</h2>
                  <p class="subtitle four-oh-four__body">The page you are looking for might have been removed, had its address changed, or become temporarily unavailable.</p>
                  <p class="subtitle four-oh-four__body">Go to <router-link to="/">home page</router-link> or <a @click="$router.go(-1)">return to the previous page</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '404',
  data() {
    return {
      video: require(`@/assets/videos/jogging.mp4`),
    };
  },
  methods: {
    resize() {
      this.setContainerHeight();

      if (this.videoCanPlay()) {
        this.setVideoSize();
      }
    },
    videoCanPlay() {
      const video = this.$el.querySelector('.video-bg');
      return !!video.canPlayType;
    },
    setContainerHeight() {
      const container = this.$el.querySelector('.hero');
      container.style.height = `${window.innerHeight}px`;
    },
    setVideoSize() {
      const container = this.$el.querySelector('.hero');
      const video = this.$el.querySelector('.video-bg');
      const containerRatio = container.offsetWidth / container.offsetHeight;
      let width;
      let height;

      if (containerRatio > this.videoRatio) {
        width = container.offsetWidth;
      } else {
        height = container.offsetHeight;
      }

      video.style.width = width ? `${width}px` : 'auto';
      video.style.height = height ? `${height}px` : 'auto';
    },
  },
  mounted() {
    this.setContainerHeight();

    if (this.videoCanPlay()) {
      const video = this.$el.querySelector('.video-bg');
      video.oncanplay = () => {
        this.videoRatio = video.videoWidth / video.videoHeight;
        this.setVideoSize();
        video.style.visibility = 'visible';
      };
    }

    window.addEventListener('resize', this.resize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.hero {
  position: relative;
  min-height: 600px;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .85);
    z-index: 1;
  }
}

.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%);
  max-width: none;
}

.four-oh-four {
  position: relative;
  z-index: 9;
  &__title {
    color: #fff;
    font-size: 7rem;
  }
  &__subtitle {
    color: #fff;
  }
  &__body {
    color: #fff;
    line-height: 1.45;
  }
}
</style>

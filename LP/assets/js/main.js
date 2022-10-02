// アコーディオン
Vue.component('accordion', {
  template: `
    <div class="accordion">
      <p class="accordion__title" :class="{ 'accordion__title--open': isOpened }" @click="accordionToggle()">
        <slot name="title"></slot>
      </p>
      <div :class="{ '_state-open': isOpened }" v-if="isOpened">
        <p class="text-s">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  `,
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
  }
});
Vue.component('accordion-arrow', {
  template: `
    <div class="accordion-arrow">
      <p class="accordion-arrow__title" :class="{ 'accordion-arrow__title--open': isOpened }" @click="accordionToggle()">
        <slot name="title"></slot><span class="btn-arrow btn-arrow--gold"></span>
      </p>
      <div :class="{ '_state-open': isOpened }" v-if="isOpened">
        <p class="text-s">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  `,
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
  }
});

const params = new URLSearchParams(location.search);

// クエリパラメータで指定されていたら、キャンペーンタブのアクティブを変える
let paramCampaign = params.get('campaign-shop');
let campaignActive = "1";
if (paramCampaign != null) {
  campaignActive = paramCampaign;
}

var app = new Vue({
  el: '#app',
  data: {
    open: false,
    campaignActive: campaignActive,
    newsActive: "1",
  },
  methods: {
    // to top
    scrollTop(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    // サムネイルのマウスオーバー
    mouseOverThumbnail(num){
      swiper.slideTo(num);
    },
    // タブ切り替え
    changeCampaignTab(num) {
        this.campaignActive = num;
    },
    changeNewsTab(num) {
      this.newsActive = num;
    },
  }
})

// カルーセル
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: new Swiper('.slider-thumbnail', {
      slidesPerView: 6,
      spaceBetween: 7,
      breakpoints: {
        // when window width is >= 600px
        600: {
          spaceBetween: 10
        },
      }
    })
  },
});

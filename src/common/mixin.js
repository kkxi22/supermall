import {debouce} from "./utils";
import BackTop from "components/content/backtop/BackTop";

export const itemImgListenerMixIn = {
  data() {
    return {
      funcListener: null
    }
  },
  mounted() {
    const refresh = debouce(this.$refs.scroll.refresh, 200);
      this.funcListener = () => {
        refresh()
      }
      this.$bus.$on('itemImgLoad', this.funcListener)
    // console.log('----');
  }
}

export const backTopMixIn =  {
  data() {
    return {
      showOrNot: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
        this.$refs.scroll.backScroll(0,0,500)
      },
  }
}

<demo>
2.一键打开Dialog
</demo>

<template>
  <div>
    <Button @click="showDialog" level="main">Open Dialog</Button>
  </div>
</template>

<script>
import {openDialog} from "../lib/openDialog";
import Button from "../lib/Button.vue";

export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: 'Title',
        content: 'Content of Dialog',
        ok: () => {
          console.log('ok')
        },
        cancel: () => {
          console.log('cancel')
        }
      })
    }
    return {showDialog}
  }
}

</script>
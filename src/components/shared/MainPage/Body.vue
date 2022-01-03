<template>
  <v-carousel v-model="model" hide-delimiters @keydown.right="onKeyRight">
    <v-carousel-item
      @keydown.right="onKeyRight"
      v-for="(word, i) in filteredText()"
      :key="i"
    >
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ word }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Body extends Vue {
  model = 0;
  start: any = null;
  msg: any = null;
  playing = false;
  usedArray: string[] = [];
  text =
    "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. A computer system is a complete computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for full operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster.";

  filteredText(): string[] {
    return this.text.split(" ");
  }

  onKeyRight(): void {
    console.log("here");
    this.model += 1;
  }

  nextItem(event: any): void {
    if (event.keyCode == 39) {
      this.model++;
    } else if (event.keyCode == 37 && this.model > 1) {
      this.model--;
    } else if (event.keyCode === 13) {
      if (this.playing) {
        clearInterval(this.start);
        this.playing = false;
      } else {
        this.start = setInterval(this.automatic, 900);
        this.playing = true;
      }
    }
  }

  automatic(): void {
    var msg = new SpeechSynthesisUtterance();
    msg.text = this.usedArray[this.model];
    window.speechSynthesis.speak(msg);
    msg.onend = function () {
      window.speechSynthesis.cancel();
    };
    this.model++;
  }

  mounted() {
    document.addEventListener("keyup", this.nextItem);
    this.usedArray = this.filteredText();
    this.msg = new SpeechSynthesisUtterance();
  }
}
</script>

<style lang="scss"></style>

export const HTML = `<section class="playground">
  <h3>{{data.title}}</h3>
  <p>Use the following input to change the title of this playground:</p>
  <input type="text" name="title" (keyup)="onKeyUp(input.value)" [value]="data.title" #input>
</section>`;

export const TYPESCRIPT = `data = {
  title: 'Home works!'
};

onKeyUp(title: string) {
  this.data.title = title;
}`;

export const DATA = {
  title: 'Home works!',
  preview: {
    html: {
      language: 'html',
      code: HTML
    },
    typescript: {
      language: 'typescript',
      code: TYPESCRIPT
    }
  }
};

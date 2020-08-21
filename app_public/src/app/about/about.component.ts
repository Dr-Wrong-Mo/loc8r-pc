import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header : {
      title : 'About Loc8r',
      strapline : ''
    },
    content : 'Loc8r was created to help people find 	places 	to sit down and get a bit of work done.\n\nLorem ipsum 	dolor sit amet, consectetur dipiscing elit. \n\n Esse laboris cillum pariatur magna. Incididunt eu officia cillum enim occaecat deserunt qui enim consequat voluptate laborum voluptate minim id. Quis consequat irure ut consequat id. \n\nQui aute elit enim aute ullamco id enim minim esse dolore enim consequat. Dolor occaecat sit ut irure officia consectetur laborum fugiat minim est. Est et minim eiusmod aliqua elit et aliqua nostrud Lorem incididunt dolore commodo.'
  };
}
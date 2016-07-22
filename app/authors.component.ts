  import {Component} from 'angular2/core'
  import {AuthorService} from './author.service'


  @Component({
        selector: 'authors',
        template: `
                  <h2>Authors</h2>
                  {{ list }}
                  <ul>
                    <li *ngFor="#author of authors">
                      {{ author }}
                    </li>
                  </ul>
                  `,
        providers: [AuthorService]
  })

  export class AuthorsComponent {
    list: string = "The list of authors for this page";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }

  }

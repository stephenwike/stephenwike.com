import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-art-filter',
  templateUrl: './my-art-filter.component.html',
  styleUrls: ['./my-art-filter.component.scss']
})
export class MyArtFilterComponent implements OnInit {

  @Input() topics: string[];
  @Output() topicsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() sortByChanged: EventEmitter<string> = new EventEmitter<string>();

  galleryFilterForm: FormGroup;

  sortByCategories: string[] = [ 'Topic', 'Random' ]; //FUTURE: add 'Newest', 'Oldest',
  sortByCategory: string;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
    console.log(this.topics);
    this.galleryFilterForm = this.formBuilder.group({
      sortbyfilter: ['Random'],
      topicfilters: {value: this.topics, disabled: false}
    });
  }

  updateFilters(): void {
    let topics = this.galleryFilterForm.get('topicfilters').value;
    this.topicsChanged.emit(topics);
  };

  updateSortBy(): void {
    let sortByCategory = this.galleryFilterForm.get('sortbyfilter').value;
    this.sortByChanged.emit(sortByCategory);
  }
}

import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlField } from 'src/app/dynamic-form/models/abstract-control-field';
import { DynamicForm } from 'src/app/dynamic-form/models/icontrol';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent extends AbstractControlField implements OnInit  {
  options = [1,2,3,4,5];
  control: DynamicForm.IStarControl;
  constructor() {
    super();
  }
  setValue(newValue: number) {
    const { key } = this.control;
    const options = {};
    options[key] = newValue;
    this.formGroup.patchValue(options);
  }

  getClass(optionValue: number): boolean {
    return optionValue <= this.formControl.value;
  }
}
import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective {

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	onFocus() {
		// console.log('focus!');
		this.renderer.setStyle(this.el.nativeElement, 'width', '200px');
	}
	 onBlur() {
		//  console.log('blur');
		 this.renderer.setStyle(this.el.nativeElement, 'width', '120px');
	 }
}

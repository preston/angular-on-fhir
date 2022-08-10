import {Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
	selector: '[highlight]'
})
export class HighlightDirective {

	@Input('highlightText') text: string = '';

	constructor(private el: ElementRef, private renderer: Renderer2) {
		console.log("Highlighting!");
		this.el.nativeElement.textContent = 'foo';
	}

}

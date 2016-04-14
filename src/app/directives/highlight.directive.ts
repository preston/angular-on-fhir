import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
	selector: '[highlight]'
})
export class HighlightDirective {

	// @Input('highlightText') text: string = '';

	constructor(private el: ElementRef, private renderer: Renderer) {
		console.log("Highlighting!");
		var orig = this.el.nativeElement.textContent;
		this.el.nativeElement.textContent = '<span class="highlight">' + orig + '</span>';
	}

}

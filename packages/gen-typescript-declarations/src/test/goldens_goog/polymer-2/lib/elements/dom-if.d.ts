/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/elements/dom-if.html
 */

/// <reference path="../../polymer-element.d.ts" />
/// <reference path="../utils/templatize.d.ts" />
/// <reference path="../utils/debounce.d.ts" />
/// <reference path="../utils/flush.d.ts" />

declare namespace Polymer {

  /**
   * The `<dom-if>` element will stamp a light-dom `<template>` child when
   * the `if` property becomes truthy, and the template can use Polymer
   * data-binding and declarative event features when used in the context of
   * a Polymer element's template.
   *
   * When `if` becomes falsy, the stamped content is hidden but not
   * removed from dom. When `if` subsequently becomes truthy again, the content
   * is simply re-shown. This approach is used due to its favorable performance
   * characteristics: the expense of creating template content is paid only
   * once and lazily.
   *
   * Set the `restamp` property to true to force the stamped content to be
   * created / destroyed when the `if` condition changes.
   */
  class DomIf extends Polymer.Element {

    /**
     * A boolean indicating whether this template should stamp.
     */
    if: boolean|null|undefined;

    /**
     * When true, elements will be removed from DOM and discarded when `if`
     * becomes false and re-created and added back to the DOM when `if`
     * becomes true.  By default, stamped elements will be hidden but left
     * in the DOM when `if` becomes false, which is generally results
     * in better performance.
     */
    restamp: boolean|null|undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     */
    render(): void;

    /**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     */
    _showHideChildren(): void;
  }
}

interface HTMLElementTagNameMap {
  "dom-if": Polymer.DomIf;
}

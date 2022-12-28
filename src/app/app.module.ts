import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { GradientHighlightDirective } from "./gradient-highlight/gradient-highlight.directive";
import { ClassTokenProviderSelectorComponent } from "./view-child/selector-property-examples/class-token-provider-selector.component";
import { ComponentSelectorComponent } from "./view-child/selector-property-examples/component-selector.component";
import { DirectiveSelectorComponent } from "./view-child/selector-property-examples/directive-selector.component";
import { TextBoxComponent } from "./text-box/text-box.component";
import { LoggerService } from "./logger.service";
import { StringTokenProviderSelectorComponent } from "./view-child/selector-property-examples/string-token-provider-selector.component";
import { TemplateReferenceVariableSelectorComponent } from "./view-child/selector-property-examples/template-reference-variable-selector.component";
import { TemplateRefSelectorComponent } from "./view-child/selector-property-examples/template-ref-selector.component";
import { MessageBoxComponent } from "./message-box/message-box.component";
import { LoggerBoxComponent } from "./logger-box/logger-box.component";
import { ReadPropertyViewChildComponent } from "./view-child/read-property-examples/read-property-view-child.component";
import { ProviderChildComponent } from "./provider-child/provider-child.component";
import { StaticPropertyViewChildComponent } from "./view-child/static-property-examples/static-property-view-child";
import { SelectorPropertyViewChildrenComponent } from "./view-children/selector-property.component";
import { ReadPropertyViewChildrenComponent } from "./view-children/read-property.component";

const routes: Routes = [
  { path: "component-selector", component: ComponentSelectorComponent },
  { path: "directive-selector", component: DirectiveSelectorComponent },
  {
    path: "template-reference-variable-selector",
    component: TemplateReferenceVariableSelectorComponent
  },
  {
    path: "class-token-provider-selector",
    component: ClassTokenProviderSelectorComponent
  },
  {
    path: "string-token-provider-selector",
    component: StringTokenProviderSelectorComponent
  },
  { path: "template-ref-selector", component: TemplateRefSelectorComponent },
  {
    path: "read-property-view-child",
    component: ReadPropertyViewChildComponent
  },
  {
    path: "static-property-view-child",
    component: StaticPropertyViewChildComponent
  },
  {
    path: "selector-property-view-children",
    component: SelectorPropertyViewChildrenComponent
  },
  {
    path: "read-property-view-children",
    component: ReadPropertyViewChildrenComponent
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    ClassTokenProviderSelectorComponent,
    ComponentSelectorComponent,
    DirectiveSelectorComponent,
    GradientHighlightDirective,
    TemplateReferenceVariableSelectorComponent,
    TemplateRefSelectorComponent,
    TextBoxComponent,
    MessageBoxComponent,
    LoggerBoxComponent,
    StringTokenProviderSelectorComponent,
    ReadPropertyViewChildComponent,
    ProviderChildComponent,
    StaticPropertyViewChildComponent,
    SelectorPropertyViewChildrenComponent,
    ReadPropertyViewChildrenComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoggerService]
})
export class AppModule {}

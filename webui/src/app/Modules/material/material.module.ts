import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTableModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule } from "@angular/material/paginator";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";

import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatFormFieldModule } from "@angular/material/form-field";

import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  imports: [
    MatPaginatorModule,
    MatDividerModule,
    MatTableModule,
    LayoutModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports: [
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTabsModule
  ]
})
export class MaterialModule {}

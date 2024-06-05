import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
    imports:[MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSnackBarModule],
    exports:[MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSnackBarModule]
})

export class MaterialModule{}
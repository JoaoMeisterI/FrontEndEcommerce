import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  
  constructor(){}

  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  formModalFiltro!:FormGroup

  ngOnInit(): void {
    this.IniciaValoresFormularioFiltro()
  }

  IniciaValoresFormularioFiltro() {
    this.formModalFiltro = new FormGroup({

    })
  }


}

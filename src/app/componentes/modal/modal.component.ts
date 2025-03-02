import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  formModalFiltro!: FormGroup;

  ngOnInit(): void {
    this.IniciaValoresFormularioFiltro();
  }

  IniciaValoresFormularioFiltro() {
    this.formModalFiltro = new FormGroup({
      numerosSelecionados: new FormControl([]),
      coresSelecionadas: new FormControl([]),
      tiposSelecionadas: new FormControl([]),
    });

  }

  PassaFiltros() {
    const filtrosObtidos = this.formModalFiltro.value;

    console.log("estou no modal",filtrosObtidos)

    this.FecharModal(filtrosObtidos);
  }

  FecharModal(filtrosObtidos:any) {
    console.log("Fechando modal sem filtros");
    this.dialogRef.close(filtrosObtidos);
  }

}

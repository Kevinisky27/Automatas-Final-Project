import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  mensaje () {
    this.toastr.info('Gracias por enviarnos un mensaje, nuestros integrantes recibirán una notificación lo más pronto posible...', 'Mensaje Enviado', {
      timeOut: 50000,
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { MyIpService } from '../../core/services/my-ip.service';
import { MyIp } from '../../core/models/myIp-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public myip: MyIp = {
    ip: "-",
    country: "-",
    cc: "-",
  }

  constructor(readonly myIpService: MyIpService) {}

  ngOnInit(): void {
    this.getIp();
  }

  getIp(){
    this.myIpService.getIp().subscribe({
      next: (response) => {
        this.myip = response;
        console.log(response);
      },
      error: (err) => {
        console.error('Erro ao buscar o ip:', err);
      },
    });
  }
}

import { Component, EventEmitter, input, Output } from '@angular/core';
import { ButtonModule, Button } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [FormsModule, CommonModule, Button, ButtonModule, SkeletonModule, InputIconModule, IconFieldModule]
})
export class Navbar {

  searchKey: string = "";
  print(){
    console.log(this.searchKey);
  }

}

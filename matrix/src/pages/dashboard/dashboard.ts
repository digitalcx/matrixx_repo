

import { Component ,ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Chart} from 'chart.js';
import {HomeService} from '../../providers/HomeService';
// import 'chart.piecelabel.js';

 
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  greens: number;
  reds: number;

  constructor(public navCtrl: NavController) {
    this.greens = 0;
    this.reds = 0;
  }
  ngOnInit(): void {
    console.log('ionViewDidLoad DashboardPage');
    this.addGreens();
    /*setInterval(() => {
      this.getApiData(); // Now the "this" still references the component
    }, 1000);*/
  }
  addGreens(): void {
    this.greens++;
    this.displayChart();
    // this.displayChart2();
  }
 
  addReds(): void {
    this.reds++;
    this.displayChart();
    // this.displayChart2();
  }

  

 
  displayChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
        datasets: [{
          data: [50, 60, 70],
          backgroundColor: [
            'rgba(0, 255, 0, 1)',
            'rgba(255, 0, 0, 1)'
          ]
        }]
       },
      options: {
        elements: {
          center: {
          text: 'Desktop',
          color: '#36A2EB', //Default black
          fontStyle: 'Helvetica', //Default Arial
          sidePadding: 15 //Default 20 (as a percentage)
        }
      },
        responsive:false,
        animation:{
          duration:500
        },
        layout: {
      },
        legend: {
          display: true,
          text: "String",
          fillStyle: "#423234"
        },

        tooltips: {
          enabled: true
        },
        title: {
          text: "Data consumption 1",
          display: true,
          fontStyle: 'bold',
          fontSize: 18
        }
      },

  });
/*
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    type: 'doughnut',
    data: {
      datasets: [{
        data: [10, 20],
        backgroundColor: [
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 0, 1)'
        ]
      }]
     },
    options: {
      responsive:false,
      animation:{
        duration:500
      },
      layout: {
    },
      legend: {
        display: true,
        text: "String",
        fillStyle: "#423234"
      },

      tooltips: {
        enabled: false
      },
      title: {
        text: "Data consumption 2",
        display: true,
        fontStyle: 'bold',
        fontSize: 18
      }
    },

  });

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

    type: 'doughnut',
    
    data: {
      datasets: [{
        data: [20, 30, 40],
        backgroundColor: [
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 0, 1)'
        ]
      }]
     },
    options: {
      responsive:false,
      animation:{
        duration:500
      },
      layout: {
        
    },
      legend: {
        display: true,
        text: "String",
        fillStyle: "#423234"
      },

      tooltips: {
        enabled: false
      },
      title: {
        text: "Data consumption 3",
        display: true,
        fontStyle: 'bold',
        fontSize: 18
      }
    },

  });*/
  }
 
}
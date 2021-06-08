import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyinfoComponent } from './myinfo.component';
import { CalculatorComponent } from './calculator.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { EmployeeComponent } from './employee.component';
import { FortestComponent } from './DirectiveDemos/fortest.component';
import { CrudtestComponent } from './Crud/crudtest.component';
import { Pipe1Component } from './PipeDemos/pipe1.component';
import { FirstPipe } from './PipeDemos/first.pipe';
import { Crud1Component } from './Crud/crud1.component';
import { Crud2Component } from './Crud/crud2.component';
import { BankcrudComponent } from './Crud/bankcrud.component';
import { EmpComponent } from './directiveDemos/ifexample/emp.component';
import { MyfilterPipe } from './directiveDemos/ifexample/myfilter.pipe';
import { StudentComponent } from './directiveDemos/ifexample/student.component';
import { StudfilterPipe } from './directiveDemos/ifexample/studfilter.pipe';
import { ParentComponent } from './ioDecorator/parent.component';
import { ChildComponent } from './ioDecorator/child.component';
import { SparentComponent } from './ioDecorator/sparent.component';
import { SchildComponent } from './ioDecorator/schild.component';
import { ContactComponent } from './FormDemos/contact.component';
import { StudComponent } from './FormDemos/stud.component';







@NgModule({
  declarations: [
    AppComponent,
    MyinfoComponent,
    CalculatorComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    FortestComponent,
    CrudtestComponent,
    Crud1Component,
    Crud2Component,
    BankcrudComponent,
    Pipe1Component,
    FirstPipe,
    EmpComponent,
    MyfilterPipe,
    StudentComponent,
    StudfilterPipe,
    ParentComponent,
    ChildComponent,
    SparentComponent,
    SchildComponent,
    ContactComponent,
    StudComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

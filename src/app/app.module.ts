import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {FlashcardsComponent} from './components/flashcards/flashcards.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlashcardCreatorComponent} from './components/flashcards/flashcard-creator/flashcard-creator.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FlashcardsMenuComponent} from './components/flashcards/flashcards-menu/flashcards-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {faHourglassHalf, faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import {environment} from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    FlashcardsComponent,
    FlashcardCreatorComponent,
    FlashcardsMenuComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faHourglassHalf,
      faPenToSquare
    );
  }
}

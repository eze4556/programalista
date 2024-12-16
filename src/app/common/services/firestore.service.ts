import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collectionData, collection,
  doc, docData, getDoc, setDoc, updateDoc, deleteDoc,
  DocumentReference
} from '@angular/fire/firestore';

const { v4: uuidv4 } = require('uuid');

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  private firestore: Firestore = inject(Firestore);

  constructor() { }


  getDocument<tipo>(enlace: string) {
    const document = doc(this.firestore, enlace) as DocumentReference<tipo, any>;
    return getDoc<tipo, any>(document)
  }

  getDocumentChanges<tipo>(enlace: string) {
    console.log('getDocumentChanges -> ', enlace);
    const document = doc(this.firestore, enlace);
    return docData(document) as Observable<tipo>;
  }

  getCollectionChanges<tipo>(path: string) {
    const itemCollection = collection(this.firestore, path);
    return collectionData(itemCollection) as Observable<tipo[]>;
  }

  createDocument(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return setDoc(document, data);
  }

  createDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }


  async updateDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return updateDoc(document, data)
  }

  async updateDocument(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return updateDoc(document, data)
  }

  deleteDocumentID(enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return deleteDoc(document);
  }

  deleteDocFromRef(ref: any) {
    return deleteDoc(ref)
  }

  createIdDoc() {
    return uuidv4()
  }
  

    // Obtener todas las listas de precios
  getPriceLists(): Observable<any[]> {
    const priceListCollection = collection(this.firestore, 'listasDePrecios');
    return collectionData(priceListCollection, { idField: 'id' }) as Observable<any[]>;
  }

  // Obtener una lista de precios por ID
  getPriceListById(id: string): Observable<any> {
    const document = doc(this.firestore, `listasDePrecios/${id}`);
    return docData(document, { idField: 'id' }) as Observable<any>;
  }

  // Crear una nueva lista de precios
  createPriceList(data: any): Promise<void> {
    const id = uuidv4(); // Generar ID único
    const document = doc(this.firestore, `listasDePrecios/${id}`);
    return setDoc(document, { id, ...data });
  }

  // Actualizar una lista de precios
  updatePriceList(id: string, data: any): Promise<void> {
    const document = doc(this.firestore, `listasDePrecios/${id}`);
    return updateDoc(document, data);
  }

  // Eliminar una lista de precios
  deletePriceList(id: string): Promise<void> {
    const document = doc(this.firestore, `listasDePrecios/${id}`);
    return deleteDoc(document);
  }






}

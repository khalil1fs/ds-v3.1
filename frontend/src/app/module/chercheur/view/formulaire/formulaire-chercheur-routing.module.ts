
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { ChercheurChercheurComponent } from './chercheur-chercheur/chercheur-chercheur.component';



    import { CampagneChercheurComponent } from './campagne-chercheur/campagne-chercheur.component';



    import { DistinctionChercheurComponent } from './distinction-chercheur/distinction-chercheur.component';

import { DistinctionCreateChercheurComponent } from './distinction-chercheur/create-chercheur/distinction-create-chercheur.component';


    import { EtatEtapeCampagneChercheurComponent } from './etat-etape-campagne-chercheur/etat-etape-campagne-chercheur.component';



    import { IdentifiantAuteurExpertChercheurComponent } from './identifiant-auteur-expert-chercheur/identifiant-auteur-expert-chercheur.component';



    import { DistinctionDisciplineScientifiqueChercheurComponent } from './distinction-discipline-scientifique-chercheur/distinction-discipline-scientifique-chercheur.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'campagne',
                            children: [
                                {
                                    path: 'list',
                                    component: CampagneChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'distinction',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                                 , {
                                    path: 'create',
                                    component: DistinctionCreateChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etape-campagne',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtapeCampagneChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'identifiant-auteur-expert',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantAuteurExpertChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'distinction-discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionDisciplineScientifiqueChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class FormulaireChercheurRoutingModule { }

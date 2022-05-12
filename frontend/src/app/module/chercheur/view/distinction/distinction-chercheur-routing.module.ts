
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DistinctionDisciplineScientifiqueChercheurComponent } from './distinction-discipline-scientifique-chercheur/distinction-discipline-scientifique-chercheur.component';



    import { DistinctionChercheurComponent } from './distinction-chercheur/distinction-chercheur.component';

import { DistinctionCreateChercheurComponent } from './distinction-chercheur/create-chercheur/distinction-create-chercheur.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


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

                        {

                            path: 'distinction',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                                 ,{
                                    path: 'create',
                                    component: DistinctionCreateChercheurComponent ,
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
export class DistinctionChercheurRoutingModule { }

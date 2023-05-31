import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const mfe_app = "http://localhost:3000/remoteEntry.js"
const mfe2_app = "http://localhost:1000/remoteEntry.js"

const routes: Routes = [
{path: 'load',
loadChildren: () => {
return loadRemoteModule({
remoteEntry:mfe_app,
remoteName:"mfe1",
exposedModule:"./AppModule"
}).then(m => m.AppModule).catch(err => console.error(err));
}
},
{path: 'mfe2',
loadChildren: () => {
return loadRemoteModule({
remoteEntry:mfe2_app,
remoteName:"mfe2",
exposedModule:"./AppModule"
}).then(m => m.AppModule).catch(err => console.error(err));
}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

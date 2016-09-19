# slate-cbl-admin
CBL centric expansion for SlateAdmin

## Getting started with client-side UI application development
1. Follow [SlateAdmin's README section on getting started with development](https://github.com/SlateFoundation/slate-admin#getting-started-with-client-side-ui-application-development)
2. Verify that you can load SlateAdmin and browse people using `?apiHost=dev-cbl-tasks.node0.slate.is`
3. Clone the `slate-cbl-admin` repository somewhere outside the slate-admin repository
4. `cd slate-cbl-admin/sencha-workspace/packages`
5. `cd ../../../slate-admin/sencha-workspace/packages/`
7. `ln -s ../../../slate-cbl-admin/sencha-workspace/packages/*/ .`: Symlink all slate-cbl-admin packages into slate-admin packages directory
8. `cd ../SlateAdmin`
9. Add `slate-cbl-admin` to the `requires` array within `app.json`
10. `sencha app build`

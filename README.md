# slate-cbl-admin
CBL centric expansion for SlateAdmin

## Release Process
1. Commit or merge changes into the `master` branch
2. Run from the root of the repository: `./update-build.sh`
3. Inspect new commits to `builds/v1` branch
4. Push `builds/v1` branch: `git push origin builds/v1`
5. Push tags: `git push --tags`
6. Add release notes to new tag on GitHub

## Installation Process
1. Copy [sample `slate-cbl-admin.php` git config script](https://github.com/SlateFoundation/slate-cbl-admin/blob/master/php-config/Git.config.d/slate-cbl-admin.php) into site
2. Visit `/git/status` and initialize the `slate-cbl-admin` layer
3. Return to `/git/status` and click <kbd>Disk → VFS</kbd> for the `slate-cbl-admin` layer

## Getting started with client-side UI application development
1. Follow [SlateAdmin's README section on getting started with development](https://github.com/SlateFoundation/slate-admin#getting-started-with-client-side-ui-application-development)
2. Verify that you can load SlateAdmin and browse people using `?apiHost=dev-cbl-tasks.node0.slate.is`
3. Clone the `slate-cbl-admin` repository somewhere outside the slate-admin repository
4. `cd slate-admin/sencha-workspace/packages`
5. `ln -s ../../../slate-cbl-admin/sencha-workspace/packages/*/ .`: Symlink all slate-cbl-admin packages into slate-admin packages directory
6. `cd ../SlateAdmin`
7. Add `slate-cbl-admin` to the `requires` array within `app.json`
8. `sencha app build`

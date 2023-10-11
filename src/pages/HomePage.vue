<template>
  <div class="container">
    <div class="row mb-3">
      <router-view name="topMenu"></router-view>
    </div>
    <div class="row">
      <div class="col-12 col-md-2">
        <router-view name="sideMenu"></router-view>
      </div>
      <div class="col-12 col-md-8">
        <div class="row mb-3">
          <router-view name="form"></router-view>
        </div>
        <div class="row">
          <router-view items="items" name="table"></router-view>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <router-view name="buttonGroupView"></router-view>
      </div>
    </div>
  </div>
</template>

<style></style>

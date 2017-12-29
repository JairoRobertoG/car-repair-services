 jQuery( document ).ready(function($) {
     jQuery('.tmps-select').change(function(){
          if(jQuery("option:selected", this).val()!=0){
             jQuery(this).closest('.form-group-1').next('.form-group-1').find('.search-input').prop("disabled", false);
          }else{
              
          }
     })
    jQuery('.search-value').change(function(){
        $this=jQuery(this)
	  if(jQuery("option:selected", this).val()!=0){
          if($this.hasClass('last-value')){
             $this.closest('form').find('.false-submit').removeClass('disabled');
              return false
          }
          jQuery('.car-repair-plugin-modal').show();
          //$this.after('<div class="auto-repair-loader">Loading...</div>')
          $this.closest('.form-group').nextAll('.form-group').find('select').val(0).prop("disabled", true).find('.ajax_get_option').replaceWith('');
          
          jQuery('.false-submit').addClass('disabled')
          
          var formData = $this.closest('form').serializeArray();
          formData.push( {name: 'action', value: 'get_option_data'});
          request = $.ajax({
                url: ajax_object.ajax_url,
                type: "post",
                data: formData
            });
            request.done(function (response, textStatus, jqXHR){
                $this.closest('.form-group').next('.form-group').find('select').find('.ajax_get_option').replaceWith('');
                $this.closest('.form-group').next('.form-group').find('select').append(response).prop("disabled", false);
                jQuery('.car-repair-plugin-modal').hide();
            });
            request.fail(function (jqXHR, textStatus, errorThrown){
                console.error("error occurred: "+textStatus, errorThrown);
            });
	  }else{
	  	$this.closest('.form-group').nextAll('.form-group').find('select').val(0).prop("disabled", true).find('.ajax_get_option').replaceWith('');

	  }
	})



jQuery('.false-submit').click(function(){
   $this=jQuery(this)
  var formData = jQuery(this).closest('form').serializeArray();
  formData.push( {name: 'action', value: 'submit-form'});
  request = $.ajax({
                url: ajax_object.ajax_url,
                type: "post",
                data: formData
            });
            request.done(function (response, textStatus, jqXHR){
              
              jQuery('.search-result').html(response)
              
                //console.log("Hooray, it worked!");
            });

})

     
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    jQuery('.search-result').html('')
});
function auto_repair_search_google_map_image_add(){
    $('.group-google-maps-preview').attr('src','http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCfhzd0bAaROSzNktILQEGLODV6DCI9S7c&center='+ $('.group-google-maps-preview').attr('data-src')+'&zoom=15&size=270x150&sensor=true&markers=color:red|'+ $('.group-google-maps-preview').attr('data-src'));
    $(window).off('scroll',auto_repair_search_google_map_image_add);
};
$(window).on('scroll',auto_repair_search_google_map_image_add);

});


 
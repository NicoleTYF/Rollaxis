using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Rollaxis
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            CookieHttpOnly = true, 

            ExpireTimeSpan = TimeSpan.FromMinutes(60),
            SlidingExpiration = false
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           /**
            * The XSRF-TOKEN cookie is added to the response of the HTTP request. 
            */
            services.AddAntiforgery(options => {
                                        options.HeaderName = "X-XSRF-TOKEN",
                                        options.SuppressXFrameOptionsHeader = false};
);

            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });

            /**
             * SECURE REST APIs
             * The cookie is a secure cookie so this is only sent with HTTPS and not 
             * HTTP.All HTTP(Not HTTPS) requests will fail and return a 400 response.
             * The cookie is created and added each time a new server url is called, 
             * but not for an API call.
             */
            app.Use(next => context =>
            {
                if (context.Request.Path.Value.IndexOf("/api", 
                    StringComparison.OrdinalIgnoreCase) != -1) {
                        var tokens = antiforgery.GetAndStoreTokens(context);
                        context.Response.Cookies.Append("XSRF-TOKEN", 
                        tokens.RequestToken, new CookieOptions() { 
                            HttpOnly = false, Path = "/" 
                    });
                    //setting HttpOnly=true,Secure=true will make browser cookie secure 
                }
                return next(context);
            });
        }

        services.Configure<IdentityOptions>(options => {
             // Password settings
             options.Password.RequireDigit = true;
             options.Password.RequiredLength = 8;
             options.Password.RequireNonAlphanumeric = true;
             options.Password.RequireUppercase = true;
             options.Password.RequireLowercase = true;
             options.Password.RequiredUniqueChars = 6;

             options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
             options.Lockout.MaxFailedAccessAttempts = 3;

             options.SignIn.RequireConfirmedEmail = true;

             options.User.RequireUniqueEmail = true;
            });
         }

         services.ConfigureApplicationCookie(options => {
             options.Cookie.HttpOnly = true;
             options.Cookie.Expiration = TimeSpan.FromHours(1)
             options.SlidingExpiration = true;
         });
}

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{ url ('/auth/index') }}">Reggae Mansion Admin</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
            <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="{{ url ('/auth/logout') }}"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li {{ (Request::is('/') ? 'class="active"' : '') }}>
                            <a href="{{ url ('admin/dashboard') }}"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>


                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i>Home<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li {{ (Request::is('*header_content') ? 'class=active' : '') }}>
                                    <a href="{{ url ('admin/header_content') }}">Home Content</a>
                                </li>
                                <li {{ (Request::is('*header_gallery') ? 'class=active' : '') }}>
                                    <a href="{{ url ('admin/header_gallery' ) }}">Home Gallery</a>
                                </li>
                            </ul>

                        </li>

                        <li {{ (Request::is('*facilities') ? 'class="active"' : '') }}>
                            <a href="{{ url ('admin/facilities') }}"><i class="fa fa-bar-chart-o fa-fw"></i> Facilities</a>
                            <!-- /.nav-second-level -->
                        </li>
                        <li {{ (Request::is('*rooms') ? 'class="active"' : '') }}>
                            <a href="{{ url ('admin/rooms') }}"><i class="fa fa-table fa-fw"></i> Rooms</a>
                        </li>
                        <li {{ (Request::is('*rooftop') ? 'class="active"' : '') }}>
                            <a href="{{ url ('admin/rooftop') }}"><i class="fa fa-edit fa-fw"></i> Roof Top</a>
                        </li>
                         <li {{ (Request::is('*cafe') ? 'class="active"' : '') }}>
                            <a href="{{ url ('admin/cafe') }}"><i class="fa fa-edit fa-fw"></i> Cafe</a>
                        </li>
                         <li {{ (Request::is('*aboutUs') ? 'class="active"' : '') }}>
                            <a href="{{ url ('admin/contents') }}"><i class="fa fa-edit fa-fw"></i> About Us</a>
                        </li>
                        
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

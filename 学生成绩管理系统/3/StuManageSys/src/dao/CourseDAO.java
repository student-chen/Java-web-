package dao;

import java.util.List;
import java.util.Set;

import models.Course;

import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 	* A data access object (DAO) providing persistence and search support for Course entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see models.Course
  * @author MyEclipse Persistence Tools 
 */

public class CourseDAO extends HibernateDaoSupport implements ICourseDAO  {
	     private static final Logger log = LoggerFactory.getLogger(CourseDAO.class);
		protected void initDao() {
		//do nothing
	}
    
    /* (non-Javadoc)
	 * @see dao.ICourseDAO#save(models.Course)
	 */
    public void save(Course transientInstance) {
        log.debug("saving Course instance");
        try {
            getHibernateTemplate().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	/* (non-Javadoc)
	 * @see dao.ICourseDAO#delete(models.Course)
	 */
	public void delete(Course persistentInstance) {
        log.debug("deleting Course instance");
        try {
            getHibernateTemplate().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    /* (non-Javadoc)
	 * @see dao.ICourseDAO#findById(java.lang.Integer)
	 */
    public Course findById( java.lang.Integer id) {
        log.debug("getting Course instance with id: " + id);
        try {
            Course instance = (Course) getHibernateTemplate()
                    .get("models.Course", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    /* (non-Javadoc)
	 * @see dao.ICourseDAO#findByExample(models.Course)
	 */
    public List findByExample(Course instance) {
        log.debug("finding Course instance by example");
        try {
            List results = getHibernateTemplate().findByExample(instance);
            log.debug("find by example successful, result size: " + results.size());
            return results;
        } catch (RuntimeException re) {
            log.error("find by example failed", re);
            throw re;
        }
    }    
    
    /* (non-Javadoc)
	 * @see dao.ICourseDAO#findByProperty(java.lang.String, java.lang.Object)
	 */
    public List findByProperty(String propertyName, Object value) {
      log.debug("finding Course instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Course as model where model." 
         						+ propertyName + "= ?";
		 return getHibernateTemplate().find(queryString, value);
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	/* (non-Javadoc)
	 * @see dao.ICourseDAO#findByCName(java.lang.Object)
	 */
	public List findByCName(Object CName
	) {
		return findByProperty(_CNAME, CName
		);
	}
	
	/* (non-Javadoc)
	 * @see dao.ICourseDAO#findByCHour(java.lang.Object)
	 */
	public List findByCHour(Object CHour
	) {
		return findByProperty(_CHOUR, CHour
		);
	}
	

	/* (non-Javadoc)
	 * @see dao.ICourseDAO#findAll()
	 */
	public List findAll() {
		log.debug("finding all Course instances");
		try {
			String queryString = "from Course";
		 	return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    /* (non-Javadoc)
	 * @see dao.ICourseDAO#merge(models.Course)
	 */
    public Course merge(Course detachedInstance) {
        log.debug("merging Course instance");
        try {
            Course result = (Course) getHibernateTemplate()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    /* (non-Javadoc)
	 * @see dao.ICourseDAO#attachDirty(models.Course)
	 */
    public void attachDirty(Course instance) {
        log.debug("attaching dirty Course instance");
        try {
            getHibernateTemplate().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    /* (non-Javadoc)
	 * @see dao.ICourseDAO#attachClean(models.Course)
	 */
    public void attachClean(Course instance) {
        log.debug("attaching clean Course instance");
        try {
            getHibernateTemplate().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }

	public static ICourseDAO getFromApplicationContext(ApplicationContext ctx) {
    	return (ICourseDAO) ctx.getBean("CourseDAO");
	}
}
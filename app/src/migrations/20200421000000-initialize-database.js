module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable('silvipc_address', {
          addressId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
            validate: {
              isUUID: 4
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          addressType: {
            allowNull: false,
            comment: 'Address type',
            type: Sequelize.STRING(30),
            unique: false
          },
          addressLine1: {
            allowNull: false,
            comment: 'Address line 1',
            type: Sequelize.STRING(255),
            unique: false
          },
          addressLine2: {
            allowNull: false,
            comment: 'Address line 2',
            type: Sequelize.STRING(255),
            unique: false
          },
          city: {
            allowNull: false,
            comment: 'City name',
            type: Sequelize.STRING(255),
            unique: false
          },
          province: {
            allowNull: false,
            comment: 'Province',
            type: Sequelize.STRING(30),
            unique: false
          },
          postalCode: {
            allowNull: false,
            comment: 'Postal code',
            type: Sequelize.STRING(30),
            unique: false
          }
        }, {
          comment: 'List of all addresses',
          transaction: t
        }),
        queryInterface.createTable('silvipc_submission', {
          submissionId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
            validate: {
              isUUID: 4
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          }
        }, {
          comment: 'List of all submissions',
          transaction: t
        }),
        queryInterface.createTable('silvipc_status', {
          statusId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID
          },
          submissionId: {
            allowNull: false,
            comment: 'Associated submission id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_submission',
              key: 'submissionId'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          status: {
            allowNull: false,
            comment: 'The status',
            type: Sequelize.STRING(255),
            unique: false
          },
          notes: {
            allowNull: false,
            comment: 'Optional status notes',
            type: Sequelize.STRING(255),
            unique: false
          },
          updatedBy: {
            allowNull: false,
            comment: 'Who last updated this',
            type: Sequelize.STRING(255),
            unique: false
          },
          externalRefNumber: {
            allowNull: false,
            comment: 'External reference number',
            type: Sequelize.STRING(255),
            unique: false
          },
          externalRefLink: {
            allowNull: false,
            comment: 'External reference url link',
            type: Sequelize.STRING(255),
            unique: false
          }
        }, {
          comment: 'List of all statuses',
          transaction: t
        }),
        queryInterface.createTable('silvipc_answer', {
          answerId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
            validate: {
              isUUID: 4
            }
          },
          submissionId: {
            allowNull: false,
            comment: 'Associated submission id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_submission',
              key: 'submissionId'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          guidelinesRead: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          assessmentCompleted: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          developedPlan: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          protectionSignage: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          workerContactPersonnel: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          mhoContacted: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          commonAreaDistancing: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          sleepingAreaType: {
            allowNull: false,
            comment: 'Sleeping Area Type',
            type: Sequelize.INTEGER,
            unique: false
          },
          sharedSleepingPerRoom: {
            allowNull: false,
            comment: 'Workers sleeping per room',
            type: Sequelize.INTEGER,
            unique: false
          },
          sharedSleepingDistancing: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          selfIsolateUnderstood: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          selfIsolateAccommodation: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          laundryServices: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          wasteManagementGloves: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          wasteManagementSchedule: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          wasteManagementBags: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          handWashingStations: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          handWashingSoapWater: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          handWashingWaterless: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          handWashingPaperTowels: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          handWashingSignage: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          distancingSleepingBarriers: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          distancingFaceShields: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          disinfectingSchedule: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          educationSignage: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          educationContactPersonnel: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          trainingCovid19: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          trainingEtiquette: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          trainingLocations: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          trainingFirstAid: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          trainingReporting: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          mealsDistancing: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          mealsDishware: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          mealsDishwashing: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectionSeparation: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectionSymptoms: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectionHeathLinkBC: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectionSanitization: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectionAccommodation: {
            allowNull: true,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectedFeeding: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectedHousekeeping: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          infectedWaste: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          certifyAccurateInformation: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          },
          agreeToInspection: {
            allowNull: false,
            comment: '',
            type: Sequelize.BOOLEAN,
            unique: false
          }
        }, {
          comment: 'List of all IPC submission answers',
          transaction: t
        }),
        queryInterface.createTable('silvipc_business', {
          businessId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
            validate: {
              isUUID: 4
            }
          },
          submissionId: {
            allowNull: false,
            comment: 'Associated submission id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_submission',
              key: 'submissionId'
            }
          },
          addressId: {
            allowNull: false,
            comment: 'Associated address id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_address',
              key: 'addressId'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          name: {
            allowNull: false,
            comment: 'The business name',
            type: Sequelize.STRING(255),
            unique: false
          }
        }, {
          comment: 'List of all businesses',
          transaction: t
        }),
        queryInterface.createTable('silvipc_contact', {
          contactId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID
          },
          businessId: {
            allowNull: false,
            comment: 'Associated Business id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_business',
              key: 'businessId'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          contactType: {
            allowNull: false,
            comment: 'Contact type',
            type: Sequelize.STRING(30),
            unique: false
          },
          firstName: {
            allowNull: false,
            comment: 'Contact first name',
            type: Sequelize.STRING(120),
            unique: false
          },
          lastName: {
            allowNull: false,
            comment: 'Contact last name',
            type: Sequelize.STRING(120),
            unique: false
          },
          phone1: {
            allowNull: false,
            comment: 'Contact primary phone',
            type: Sequelize.STRING(30),
            unique: false
          },
          phone2: {
            allowNull: true,
            comment: 'Contact secondary phone',
            type: Sequelize.STRING(30),
            unique: false
          },
          email: {
            allowNull: false,
            comment: 'Contact email address',
            type: Sequelize.STRING(255),
            unique: false
          }
        }, {
          comment: 'List of all contacts',
          transaction: t
        }),
        queryInterface.createTable('silvipc_location', {
          locationId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
            validate: {
              isUUID: 4
            }
          },
          submissionId: {
            allowNull: false,
            comment: 'Associated submission id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_submission',
              key: 'submissionId'
            }
          },
          addressId: {
            allowNull: false,
            comment: 'Associated address id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_address',
              key: 'addressId'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          startDate: {
            allowNull: false,
            type: Sequelize.DATE
          },
          endDate: {
            allowNull: false,
            type: Sequelize.DATE
          },
          name: {
            allowNull: false,
            comment: 'The location name',
            type: Sequelize.STRING(255),
            unique: false
          },
          order: {
            allowNull: false,
            comment: 'The location name',
            type: Sequelize.INTEGER,
            unique: false
          }
        }, {
          comment: 'List of all locations and timespans',
          transaction: t
        }),
        queryInterface.createTable('silvipc_accommodation', {
          accommodationId: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
            validate: {
              isUUID: 4
            }
          },
          locationId: {
            allowNull: false,
            comment: 'Associated location id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_location',
              key: 'locationId'
            }
          },
          addressId: {
            allowNull: false,
            comment: 'Associated address id',
            type: Sequelize.UUID,
            references: {
              model: 'silvipc_address',
              key: 'addressId'
            }
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE
          },
          accommodationType: {
            allowNull: true,
            comment: 'Accommodation type',
            type: Sequelize.STRING(30),
            unique: false
          }
        }, {
          comment: 'List of all accommodations',
          transaction: t
        }),
      ]);
    });
  },

  down: queryInterface => {
    return queryInterface.sequelize.transaction((t) => {
      const options = { transaction: t };
      return Promise.all([
        queryInterface.dropTable('silvipc_accommodation', options),
        queryInterface.dropTable('silvipc_location', options),
        queryInterface.dropTable('silvipc_contact', options),
        queryInterface.dropTable('silvipc_business', options),
        queryInterface.dropTable('silvipc_answer', options),
        queryInterface.dropTable('silvipc_status', options),
        queryInterface.dropTable('silvipc_submission', options),
        queryInterface.dropTable('silvipc_address', options)
      ]);
    });
  }
};
